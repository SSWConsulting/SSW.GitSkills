<img src="https://raw.githubusercontent.com/SSWConsulting/SSW.People.Profiles/main/_docs/images/ssw-banner.png">

# SSW.GitSkills

Welcome to SSW.GitSkills! Thisis an experimental project to enumerate the commits mate by members of the SSW Consulting organization.    
The results are displayed graphically in chart form enabling you to easily visualize which developers have made the most commits relating to a particular skill.    


## Skills
  Skills are enumerated from 2 data sources - Languages and Topics. Languages are automatically detected by GitHub and tagged onto a repository with every commit. Topics are added manually to a repository to help describe the technology, intent, and purpose.
     

## Technologies Used
* Blazor WebAssembly
* C#
* GraphQL

      


## Limitations
There are a number of limitations with this approach, and unless these can be resolved this will remain an experimental project.
* High dependence on users accurately tagging their repos with relevant topics
* Sensitive to user commit habits (i.e. will favour User A if User A habitually commits code more frequently than User B)
* Doesn't enumerate repos stored elsewhere (e.g. Azure DevOps, clients' repos, etc.)
* Language detection is poor (e.g., GitHub will detect JavaScript, TypeScript and Vue as languages, but won't detect Angular or React)

## Todo
- [ ] Add more chart types
- [ ] Allow selecting of multiple skills
- [ ] Allow navigation by user as well as by skill
- [ ] (Potentially) Add authentication

## Demo

You can check out a working version of the prototype [here!](https://gitskills.z8.web.core.windows.net/github)    
Go to the link and explore the skills available (Languages and Topics). Click on one to see a breakdown of the commits by SSW developers.    
    
**NOTE: The GitHub GraphQL endpoint may return a 502 Bad Gateway - this is common, if it happens just refresh the page.**

<img scr="https://github.com/SSWConsulting/gitskills/blob/main/Assets/v05screenshot.png" width="700">

**Figure: Screenshot of the GitSkills demo**