function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "sip.lex.pl")) {
        return "PROXY proxy.kozminski.edu.pl:8080";
    }
    return "DIRECT";
}