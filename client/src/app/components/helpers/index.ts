import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(12);

    const hash = await bcrypt.hash(password, salt);

    return hash;
  } catch (err) {
    throw err;
  }
};

export const comparePassword = async (password: string, hashed: string) => {
  try {
    const match = await bcrypt.compare(password, hashed);

    return match;
  } catch (err) {
    throw err;
  }
};
