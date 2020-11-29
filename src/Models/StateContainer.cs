using System;

namespace gitskills.Models
{
    public class StateContainer
    {
        public StateContainer()
        {
            StateContainerInitialized = DateTime.Now;
        }

        public bool isLoading { get; set; } = false;

        public string Token { get; set; }

        public event Action OnChange;

        public void SetToken(string value)
        {
            Token = value;
            NotifyStateChanged();
        }

        public void SetLoading(bool loading)
        {
            isLoading = loading;
            NotifyStateChanged();
        }

        private void NotifyStateChanged() => OnChange?.Invoke();

        public DateTime StateContainerInitialized { get; set; }
        public DateTime SkillsPageInitialized { get; set; }
        public DateTime GithubDataRequested { get; set; }
        public DateTime GithubDataFinishedLoading { get; set; }
        public DateTime PiechartRequested { get; set; }
        public DateTime PiechartRendered { get; set; }
    }
}