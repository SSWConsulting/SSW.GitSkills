import { Injectable, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GetOrgQuery_organization, GetOrgQuery_organization_membersWithRole } from './operation-result-types';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  repos: any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  fetchGithub() {
    this.apollo.watchQuery<GetOrgQuery_organization>({
      query: gql `
      query {
        organization(login:"sswconsulting"){
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
      }
      `,
    })
    .valueChanges.subscribe(result => {
      this.repos = result.data && result.data.membersWithRole;
      this.loading = result.loading;
      this.error = result.error;
    })
  }
}
