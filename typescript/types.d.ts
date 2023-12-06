interface Intern {
  name: string;
  age: number;
  skills: string[];
}

export enum JuniorDomain {
  Web = "Web",
  Connect = "Connect",
  Backend = "Backend",
}

interface Junior {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: string;
  domain: JuniorDomain;
}

interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}

export { Company };
