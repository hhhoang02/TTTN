import CaiDat from "../screen/CaiDat/Caidat";

export enum RootStackCaiDatEnum {
    CaiDat = 'CaiDat',
}

export type RootStackParamListCaiDat = {
    CaiDat: undefined,
}


export const RootStackCaiDat = () => {
    const Screen: any = [
        { id: 1, name: RootStackCaiDatEnum.CaiDat, component: CaiDat, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}