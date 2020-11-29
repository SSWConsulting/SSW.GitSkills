using GraphQL;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Collections.Generic;
using gitskills.Models;
using System.Linq;
using Blazored.LocalStorage;

namespace gitskills.Github
{
    public class GithubService
    {
        private GraphQLHttpClient _graphQlClient { get; set; }

        public static bool isLoading { get; set; } = false;

        public List<string> Languages { get; set; } = new List<string>();
        public List<string> Topics { get; set; } = new List<string>();

        private string Token {get;set;}

        public List<OrgMember> Users { get; set; } = new List<OrgMember>();

        private ISyncLocalStorageService _localStorage;

        private Organization organization { get; set; }

        public GithubService(ISyncLocalStorageService localStorageService)
        {
            _graphQlClient = new GraphQLHttpClient("https://api.github.com/graphql", new NewtonsoftJsonSerializer());

            _localStorage = localStorageService;

            Token = _localStorage.GetItem<string>("Token");

            if(string.IsNullOrWhiteSpace(Token))
            {
              throw new System.Exception("GitHub auth token not found");
            }

            _graphQlClient.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", Token);
        }

        public async Task<Organization> GetOrgQuery(string OrganizationName)
        {
          if(organization != null)
            return organization;

          orgRequest.Variables = new
          {
              name = OrganizationName
          };
          
          var graphQlResponse = await _graphQlClient.SendQueryAsync<GetOrgQuery>(orgRequest);

          organization = graphQlResponse.Data.Organization;
          SeedLanguages(organization);

          return organization;
        }

        private void SeedLanguages(Organization organization)
        {
          var userList = organization.MembersWithRole.Nodes;

          userList.ForEach(u => u.ContributionsCollection.CommitContributionsByRepository.ForEach(r => {
            
            OrgMember user;
            user = Users.Where(x => x.Name == u.Name).FirstOrDefault();

            if(user == null)
            {
              user = new OrgMember();
              user.Name = u.Name;
              Users.Add(user);
            }



            r.Repository.Languages.Nodes.ForEach(l => {
              if(!Languages.Contains(l.Name))
                Languages.Add(l.Name);

              var skill = user.Skills.Where(s => s.Tech == l.Name).FirstOrDefault();
              
              var count = (int)r.Contributions.TotalCount;
              
              if(skill != null)
              {
                skill.CommitCount += count;
              }
              else
              {
                user.Skills.Add(new Skill
                {
                  Tech = l.Name,
                  CommitCount = count
                });
              }
            });
            
            r.Repository.RepositoryTopics.Nodes.ForEach(t => {
              if(!Topics.Contains(t.Topic.Name))
                Topics.Add(t.Topic.Name);
              var skill = user.Skills.Where(s => s.Tech == t.Topic.Name).FirstOrDefault();
              var count = (int)r.Contributions.TotalCount;
              if(skill != null)
              {
                skill.CommitCount += count;
              }
              else
              {
                user.Skills.Add(new Skill
                {
                  Tech = t.Topic.Name,
                  CommitCount = count
                });
              }
            });

          }));

          Languages.Sort();
          Topics.Sort();
        }

        private GraphQLRequest orgRequest = new GraphQLRequest
        {
            Query = @"
query OrganizationQuery ($name: String!) { 
  organization(login: $name){
    name
    membersWithRole(first:100){
      nodes{
        name
        contributionsCollection{
          commitContributionsByRepository{
            repository{
              description
              languages(first:100){
                nodes{
                  name
                }
              }
              repositoryTopics(first:100){
                nodes{
                  topic{
                    name
                  }
                }
              }
            }
            contributions(first:100){
              totalCount
            }
          }
        }
      }
    }
  }
}",
            OperationName = "OrganizationQuery"
        };
    }
}