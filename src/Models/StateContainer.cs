using System;

namespace gitskills.Models
{
    public class StateContainer
    {
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
    }
}