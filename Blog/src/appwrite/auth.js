import conf  from "../conf.js";
import {Client, Account ,ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        // eslint-disable-next-line no-useless-catch
        try{
           const userAccount = await this.account.create(ID.unique(),email,password,name);
           if(userAccount){
            // call another method to login
           }
           else{
            return userAccount;
           }
        }catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();

export default AuthService