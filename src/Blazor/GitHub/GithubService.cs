using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;

namespace gitskills.Github
{
    public class Githubservice
    {
        private GraphQLHttpClient _graphQlClient { get; set; }

        public Githubservice()
        {
            _graphQlClient = new GraphQLHttpClient("https://api.github.com/graphql", new NewtonsoftJsonSerializer());
        }


    }
}