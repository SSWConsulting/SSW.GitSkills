using GraphQL;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace gitskills.Github
{
    public class GithubService
    {
        private GraphQLHttpClient _graphQlClient { get; set; }

        public GithubService(string token)
        {
            _graphQlClient = new GraphQLHttpClient("https://api.github.com/graphql", new NewtonsoftJsonSerializer());

            _graphQlClient.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        public async Task<Organization> GetOrgQuery(string OrganizationName)
        {
          orgRequest.Variables = new
          {
              name = OrganizationName
          };
          
          var graphQlResponse = await _graphQlClient.SendQueryAsync<GetOrgQuery>(orgRequest);

          return graphQlResponse.Data.Organization;
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