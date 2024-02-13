
export function checkPasswordStrength (password: string)  {
    if (
      password.length >= 8 &&
      /\d/.test(password) &&
      /[a-zA-Z]/.test(password)
    ) {
      return "Strong";
    } else if (password.length >= 8 && /[a-zA-Z]/.test(password)) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

export function calculatePasswordStrength (password: string) {
    const strength = checkPasswordStrength(password);
    switch (strength) {
      case "Strong":
        return "text-green-500";
      case "Medium":
        return "text-yellow-500";
      case "Weak":
        return "text-red-500";
      default:
        return "";
    }
  };

  
