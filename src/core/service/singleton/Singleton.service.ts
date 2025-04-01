export default class SingletonService {
    private static instances: Map<any, any> = new Map();

    protected constructor() {}
  
    public static getInstance<T>(classInstance: { new (): T }): T {
      if (!this.instances.has(classInstance)) {
        this.instances.set(classInstance, new classInstance());
      }
      return this.instances.get(classInstance);
    }
}