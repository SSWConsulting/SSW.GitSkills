using System;

namespace gitskills.Models
{
    public class StateContainer
    {
        public bool isLoading { get; set; } = false;

        public string Property { get; set; } = "Initial value from StateContainer";

        public event Action OnChange;

        public void SetProperty(string value)
        {
            Property = value;
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