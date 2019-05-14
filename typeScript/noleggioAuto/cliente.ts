
export interface Client{
    id: string;
    spesa: number;
}
class ClientStandard implements Client{
    id: string;
    spesa: number;
}
class ClientBusiness extends ClientStandard{
    sconto: number;
}