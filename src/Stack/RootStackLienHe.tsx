import LienHe from "../screen/LienHe/Lienhe";
import Lienhe_Detail from "../screen/LienHe/Lienhe_Detail";

export enum RootStackLienHeEnum {
    LienHe = 'LienHe',
    Lienhe_Detail = 'Lienhe_Detail'
}

export type RootStackParamListLienHe = {
    LienHe: undefined,
    Lienhe_Detail: undefined,
}


export const RootStackLienHe = () => {
    const Screen: any = [
        { id: 1, name: RootStackLienHeEnum.LienHe, component: LienHe, options: {} },
        { id: 2, name: RootStackLienHeEnum.Lienhe_Detail, component: Lienhe_Detail, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}