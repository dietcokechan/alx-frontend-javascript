interface MajorCredits {
  credits: number;
  brand?: string;
}

interface MinorCredits {
  credits: number;
  brand?: string;
}

export const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
  };
};

export const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
  };
};
