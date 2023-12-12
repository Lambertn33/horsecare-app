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

export interface HostlerParams {
  hostlerId: string;
}

export interface AppointmentData {
  names: string;
  email: string;
  date: Date;
  serviceId: string;
}

export interface NewAppointmentData {
  names: string;
  email: string;
  date: Date;
  serviceId: string;
  userId: string;
}
