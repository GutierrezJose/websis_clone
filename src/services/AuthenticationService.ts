import { AuthenticationRepository } from "../repositories/AuthenticationRepository";
import { RolRepository } from "../repositories/RolRepository";
import bcrytp from 'bcryptjs';
import { generateToken } from "../utils/Jwt";

export class AuthenticationService {
    private authRepository = new AuthenticationRepository();
    
    async authenticateUser(username: string, password: string) {
        const user = await this.authRepository.findUserByUsername(username); 
        if (!user) {
            throw new Error ('User not found');
        } else {
            const isPasswordValid = await bcrytp.compare(password, user.userData.password);
            if (!isPasswordValid) {
                throw new Error ('Invalid password');
            } else {
                const rolRepository = new RolRepository();
                const userRoles: Array<string> = [];
                for(const rol of user.roles) {
                    const rolName: string | null = await rolRepository.findRolNameById(rol.id_rol);
                    if (rolName) {
                        userRoles.push(rolName);
                    }
                }
                const tokenPayload = {
                    userId: user.userData.id_user,
                    roles: userRoles
                };
                const token = generateToken(tokenPayload);
                return { token, roles: userRoles}
            }
        }
    }
}