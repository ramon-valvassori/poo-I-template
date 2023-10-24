export class Account {
    constructor(
        private id: string,
        private balance: number,
        private ownerId: string,
        private createdAt: string
    ){}

    public getId(): string {
        return this.id
    }
    public setId(newValue: string): void {
        this.id = newValue
    }


    public getBalance(): number {
        return this.balance
    }
    public setBalance(newValue: number): void {
        this.balance = newValue
    }

    public getOwnerId(): string {
        return this.ownerId
    }
    public setOwnerId(newValue: string): void {
        this.ownerId = newValue
    }

    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(newValue: string): void {
        this.createdAt = newValue
    }
}