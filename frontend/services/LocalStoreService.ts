interface localStorage {
  access_token: string;
  refresh_token: string;
}

const LocalStorageService = (function () {
  let _service: localStorage;

  function _getService(): localStorage {
    if (!_service) {
      _service.access_token = "";
      _service.refresh_token = "";
      return _service;
    }
    return _service;
  }

  function _setToken(tokenObj: localStorage): void {
    localStorage.setItem("access_token", tokenObj.access_token);
    localStorage.setItem("refresh_token", tokenObj.refresh_token);
  }

  function _getAccessToken(): string {
    return localStorage.getItem("access_token");
  }

  function _getRefreshToken(): string {
    return localStorage.getItem("refresh_token");
  }

  function _clearToken(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  function _setLanguage(lang: string): void {
    localStorage.setItem("language", lang);
  }

  function _getLanguage(): string {
    return localStorage.getItem("language");
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
    getLanguage: _getLanguage,
    setLanguage: _setLanguage,
  };
})();

export default LocalStorageService;
