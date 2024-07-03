// Helper function to check if a URL matches a specific pattern
function matchURLPattern(url, pattern) {
    var regex = new RegExp(pattern);
    return regex.test(url);
  }
  
  // Time-based proxy configuration
  function configureProxyByTime(url, host) {
    var currentHour = new Date().getHours();
    if (currentHour >= 9 && currentHour < 17) {
      return "PROXY proxy1.example.com:8080";
    } else {
      return "DIRECT";
    }
  }
  
  // Domain-based proxy configuration
  function configureProxyByDomain(url, host) {
    var blockedDomains = ["blocked-site1.com", "blocked-site2.com"];
    for (var i = 0; i < blockedDomains.length; i++) {
      if (dnsDomainIs(host, blockedDomains[i])) {
        return "PROXY proxy2.example.com:8080";
      }
    }
    
    return "DIRECT";
  }
  
  // Custom condition based on URL pattern
  function configureProxyByURLPattern(url, host) {
    if (matchURLPattern(url, "^https://internal.example.com")) {
      return "PROXY proxy3.example.com:8080";
    } else {
      return "DIRECT";
    }
  }
  
  // Main function to decide proxy configuration
  function FindProxyForURL(url, host) {
    // Time-based proxy configuration
    var timeBasedProxy = configureProxyByTime(url, host);
    if (timeBasedProxy !== "DIRECT") {
      return timeBasedProxy;
    }
    
    // Domain-based proxy configuration
    var domainBasedProxy = configureProxyByDomain(url, host);
    if (domainBasedProxy !== "DIRECT") {
      return domainBasedProxy;
    }
    
    // Custom condition based on URL pattern
    var urlPatternProxy = configureProxyByURLPattern(url, host);
    if (urlPatternProxy !== "DIRECT") {
      return urlPatternProxy;
    }
    
    // Default proxy configuration
    return "PROXY proxy4.example.com:8080";
  }
  