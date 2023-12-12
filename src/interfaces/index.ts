export interface HostlerServiceInterface {
  id: number;
  name: string;
}

export interface HostlerInterface {
  id: number;
  names: string;
  description: string;
  services: HostlerServiceInterface[];
}
