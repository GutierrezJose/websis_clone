import type { UserUpdateInterface } from "../interfaces/UserUpdateInterface";

export function mapUpdateDataToPrisma(updateData: UserUpdateInterface) {
    const data: any = {};
    if (updateData.firstName !== undefined) {data.first_name = updateData.firstName};
    if (updateData.lastName !== undefined) {data.last_name = updateData.lastName};
    if (updateData.ci !== undefined) {data.ci = updateData.ci};
    if (updateData.birthdate !== undefined) {
        data.birthdate = new Date(updateData.birthdate)};
    if (updateData.address !== undefined) {data.address = updateData.address};
    if (updateData.phone !== undefined) {data.phone = updateData.phone};
    return data;
}