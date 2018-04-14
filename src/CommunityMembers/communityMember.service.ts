import { Component ,Inject} from "@nestjs/common";
import { CommunityMemberEntity } from "./communityMember.entity";
import { Repository } from 'typeorm';
import { ICommunityMemberService, ICommunityMember} from "./Interfaces/index";

// import { InjectRepository } from '@nestjs/typeorm';



@Component()
export class CommunityMemberService implements ICommunityMemberService{

    constructor(
        @Inject('CommunityMemberRepository') private readonly communityMemberRepository: Repository<CommunityMemberEntity>
    ){}

    public async getAllCommunityMember(): Promise<[ICommunityMember[],number]>{
        return await this.communityMemberRepository.findAndCount();
    }

    public async getCommunityMember(id:number): Promise<ICommunityMember | null>{
        return await this.communityMemberRepository.findOneById(id);
    }

    public async addCommunityMember(communityMember: ICommunityMember): Promise<CommunityMemberEntity>{
        return await this.communityMemberRepository.save(communityMember);
    }

    public async updateCommunityMember(id:number,newCommunityMember: ICommunityMember): Promise<CommunityMemberEntity | null>{
        const commmunityMember = await this.communityMemberRepository.findOneById(id);
        if(!commmunityMember.id){
            console.log("community member does not exist");
        }
        await this.communityMemberRepository.updateById(id,newCommunityMember);
        return await this.communityMemberRepository.findOneById(id);
    }
}