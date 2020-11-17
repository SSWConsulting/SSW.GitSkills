import { Component, OnInit } from '@angular/core';
import { GithubService } from '../GitHub/github/github.service';
import { Apollo } from 'apollo-angular';
import { Organization } from '../GitHub/github/operation-result-types';
import gql from 'graphql-tag';
import { ApolloError, Observable } from '@apollo/client/core';


@Component({
  selector: 'gs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  gotError: boolean = false;
  errorMessage: string;

  orgName: string;

  ngOnInit(): void {
    this.fetchGithub();
  }

  repos: Organization = { __typename: null, name: null, membersWithRole: null };

  constructor(private apollo: Apollo) { }

  fetchGithub() {
    this.apollo.watchQuery<Organization>({
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
    .valueChanges.subscribe((result) => {
      console.log('got result');

      console.log(result.data);

      this.repos = result.data && result.data;
      this.orgName = result.data.name;

      this.loading = result.loading;
      this.gotError = false;
    },
    (err) => {
      this.handleError(err);
      this.loading = false;
    })
  }

  handleError(msg: string) {
    this.gotError = true;
    this.errorMessage = msg;
  }
}
