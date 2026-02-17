import UIKit

extension String {
    func base64Encoded() -> String? {
        return data(using: .utf8)?.base64EncodedString()
    }
    
    func base64Decoded() -> String? {
        guard let data = Data(base64Encoded: self) else { return nil }
    
        return String(data: data, encoding: .utf8)
    }
    
}

let base64 = """
-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQg4NfFH42SQA7MZrxd
lpVsol0Mq6C7PSUsEyxd3cA4SGagCgYIKoZIzj0DAQehRANCAATDwDJ4+okpclvn
UflRzx0aB05Cd/ETz7nkc+tuwfokkfPa9gWzA7rcU9MMUHbFFx2cAhYSKMtt9ixF
TZGkoR3d
-----END PRIVATE KEY-----
"""
print(base64.base64Encoded())
