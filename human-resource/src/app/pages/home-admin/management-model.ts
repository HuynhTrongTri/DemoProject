export interface HumanResourceSystem {
    id?: string;
    code?: string;
    name?: string;
}
export interface ManagerAccount {
    id?: string;
    username?: string;
    fullname?: string;
    isDeleted?: boolean;
    role?: Role;
}
export interface Role {
    label: number;
    name: string;
  }
