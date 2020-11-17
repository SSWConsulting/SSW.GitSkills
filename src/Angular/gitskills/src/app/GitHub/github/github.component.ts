import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Apollo } from 'apollo-angular';
import { GetOrgQuery_organization } from './operation-result-types';
import gql from 'graphql-tag';

@Component({
  selector: 'gs-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  loading: boolean = true;

  results: any[];

  ngOnInit(): void {


  }

  repos: any;
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
