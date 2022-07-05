export default abstract class AbsService {
  private static API_PREPEND: string = "tinkoff.public.invest.api.contract.v1";
  protected abstract get apiServiceSpecifier(): string;
  protected getApiUrl() {
    return `${this.apiUrl}/${AbsService.API_PREPEND}.${this.apiServiceSpecifier}`;
  }
  constructor(
    private readonly apiUrl: string,
    private readonly token: string
  ) {}
  protected async POST(endpoint: string, body: any): Promise<any> {
    const response = await fetch(`${this.getApiUrl()}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    });
    return response.json();
  }
}
