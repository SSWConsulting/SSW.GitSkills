

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrgQuery
// ====================================================

export interface Language {
  __typename: "Language";
  name: string;  // The name of the current language.
}

export interface LanguageConnection {
  __typename: "LanguageConnection";
  nodes: (Language | null)[] | null;  // A list of nodes.
}

export interface Topic {
  __typename: "Topic";
  name: string;  // The topic's name.
}

export interface RepositoryTopic {
  __typename: "RepositoryTopic";
  topic: Topic;  // The topic.
}

export interface RepositoryTopicConnection {
  __typename: "RepositoryTopicConnection";
  nodes: (RepositoryTopic | null)[] | null;  // A list of nodes.
}

export interface Repository {
  __typename: "Repository";
  description: string | null;                                                                                                                            // The description of the repository.
  languages: LanguageConnection | null;         // A list containing a breakdown of the language composition of the repository.
  repositoryTopics: RepositoryTopicConnection;  // A list of applied repository-topic associations for this repository.
}

export interface CreatedContributionCommitConnection {
  __typename: "CreatedCommitContributionConnection";
  totalCount: number;  // Identifies the total count of commits across days and repositories in the connection.
}

export interface CommitContributionByRepository {
  __typename: "CommitContributionsByRepository";
  repository: Repository;        // The repository in which the commits were made.
  contributions: CreatedContributionCommitConnection;  // The commit contributions, each representing a day.
}

export interface ContributionsCollection {
  __typename: "ContributionsCollection";
  commitContributionsByRepository: CommitContributionByRepository[];  // Commit contributions made by the user, grouped by repository.
}

export interface User {
  __typename: "User";
  name: string | null;                                                                              // The user's public profile name.
  contributionsCollection: ContributionsCollection;  // The collection of contributions this user has made to different repositories.
}

export interface OrganizationMemberConnection {
  __typename: "OrganizationMemberConnection";
  nodes: (User | null)[] | null;  // A list of nodes.
}

export interface Organization {
  __typename: "Organization";
  name: string | null;                                        // The organization's public profile name.
  membersWithRole: OrganizationMemberConnection;  // A list of users who are members of this organization.
}

export interface GetOrgQuery {
  organization: Organization | null;  // Lookup a organization by login.
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
