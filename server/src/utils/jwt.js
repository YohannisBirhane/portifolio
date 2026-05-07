// Simple JWT implementation for token handling
const crypto = require('crypto');

class JWT {
  static generateToken(user, expiresIn = '24h') {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };
    
    const payload = {
      id: user.id,
      email: user.email,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    };

    const secret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    
    const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    
    const signature = crypto
      .createHmac('sha256', secret)
      .update(`${headerEncoded}.${payloadEncoded}`)
      .digest('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    return `${headerEncoded}.${payloadEncoded}.${signature}`;
  }

  static verifyToken(token) {
    const secret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid token format');
      }

      const [headerEncoded, payloadEncoded, signatureProvided] = parts;
      
      const signature = crypto
        .createHmac('sha256', secret)
        .update(`${headerEncoded}.${payloadEncoded}`)
        .digest('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

      if (signature !== signatureProvided) {
        throw new Error('Invalid signature');
      }

      const payload = JSON.parse(
        Buffer.from(payloadEncoded + '==', 'base64').toString()
      );

      if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        throw new Error('Token expired');
      }

      return payload;
    } catch (error) {
      throw new Error('Invalid token: ' + error.message);
    }
  }
}

module.exports = JWT;
