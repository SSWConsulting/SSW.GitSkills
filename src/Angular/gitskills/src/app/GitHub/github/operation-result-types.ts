

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrgQuery
// ====================================================

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_languages_nodes {
  __typename: "Language";
  name: string;  // The name of the current language.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_languages {
  __typename: "LanguageConnection";
  nodes: (GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_languages_nodes | null)[] | null;  // A list of nodes.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_repositoryTopics_nodes_topic {
  __typename: "Topic";
  name: string;  // The topic's name.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  topic: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_repositoryTopics_nodes_topic;  // The topic.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  nodes: (GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_repositoryTopics_nodes | null)[] | null;  // A list of nodes.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository {
  __typename: "Repository";
  description: string | null;                                                                                                                            // The description of the repository.
  languages: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_languages | null;         // A list containing a breakdown of the language composition of the repository.
  repositoryTopics: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository_repositoryTopics;  // A list of applied repository-topic associations for this repository.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_contributions {
  __typename: "CreatedCommitContributionConnection";
  totalCount: number;  // Identifies the total count of commits across days and repositories in the connection.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository {
  __typename: "CommitContributionsByRepository";
  repository: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_repository;        // The repository in which the commits were made.
  contributions: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository_contributions;  // The commit contributions, each representing a day.
}

export interface GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection {
  __typename: "ContributionsCollection";
  commitContributionsByRepository: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection_commitContributionsByRepository[];  // Commit contributions made by the user, grouped by repository.
}

export interface GetOrgQuery_organization_membersWithRole_nodes {
  __typename: "User";
  name: string | null;                                                                              // The user's public profile name.
  contributionsCollection: GetOrgQuery_organization_membersWithRole_nodes_contributionsCollection;  // The collection of contributions this user has made to different repositories.
}

export interface GetOrgQuery_organization_membersWithRole {
  __typename: "OrganizationMemberConnection";
  nodes: (GetOrgQuery_organization_membersWithRole_nodes | null)[] | null;  // A list of nodes.
}

export interface GetOrgQuery_organization {
  __typename: "Organization";
  name: string | null;                                        // The organization's public profile name.
  membersWithRole: GetOrgQuery_organization_membersWithRole;  // A list of users who are members of this organization.
}

export interface GetOrgQuery {
  organization: GetOrgQuery_organization | null;  // Lookup a organization by login.
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
