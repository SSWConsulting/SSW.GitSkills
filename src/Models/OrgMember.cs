using System.Collections.Generic;

namespace gitskills.Models
{
    public class OrgMember
    {
        public string Name { get; set; }
        public List<Skill> Skills { get; set; } = new List<Skill>();
    }
}