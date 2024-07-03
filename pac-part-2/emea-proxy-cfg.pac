function FindProxyForURL(url, host) {
    // US-based location
    if (isInNet(myIpAddress(), "10.1.0.0", "255.255.0.0")) {
      return "PROXY emea-proxy.example.com:8080";
    }
    
    // Default proxy configuration
    return "DIRECT";
}