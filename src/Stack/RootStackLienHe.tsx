import LienHe from "../screen/LienHe/Lienhe";

export enum RootStackLienHeEnum {
    LienHe = 'LienHe',
}

export type RootStackParamListLienHe = {
    LienHe: undefined,
}


export const RootStackLienHe = () => {
    const Screen: any = [
        { id: 1, name: RootStackLienHeEnum.LienHe, component: LienHe, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}