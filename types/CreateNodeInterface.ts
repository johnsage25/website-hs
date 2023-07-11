export interface CreateNodeInterface {
  vmId?: string;
  osType?: string;
  region?: string;
  osVersion?: string;
  vmAuth?: string;
  sshKey?: string;
  sskLabel?: string;
  hostdetails?: Hostdetail[];
  password?: string;
  quantity?: number;
  _id?:string
}

export interface Hostdetail {
  tag: string;
  id: number;
  hostname: string;
}
