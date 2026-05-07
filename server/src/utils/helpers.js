// Utility helper functions
const helpers = {
  // Validate email format
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Hash password (basic implementation - use bcrypt in production)
  hashPassword: (password) => {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(password).digest('hex');
  },

  // Format response
  formatResponse: (success, message, data = null) => {
    return {
      success,
      message,
      data
    };
  },

  // Validate required fields
  validateRequired: (obj, fields) => {
    const missing = fields.filter(field => !obj[field]);
    return {
      valid: missing.length === 0,
      missing
    };
  },

  // Parse tech stack string
  parseTechStack: (techStackStr) => {
    if (typeof techStackStr === 'string') {
      return techStackStr.split(',').map(tech => tech.trim());
    }
    return techStackStr;
  },

  // Format tech stack for storage
  formatTechStack: (techStackArray) => {
    if (Array.isArray(techStackArray)) {
      return techStackArray.join(', ');
    }
    return techStackArray;
  }
};

module.exports = helpers;
