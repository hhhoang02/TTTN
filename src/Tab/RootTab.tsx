import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TrangChuNavigation from "../Stack/StackNavigation";
import COLOR, { BG_COLOR } from "../utilities";

export enum RootTabScreenENum {
    StackTrangChu = 'Trang chủ',
    StackLichSu = 'Lịch sử',
    StackLienHe = 'Liên hệ',
    StackCaiDat = 'Cài đặt',
};

export type RootTabParamList = {
    StackTrangChu: undefined,
    StackLichSu: undefined,
    StackLienHe: undefined,
    StackCaiDat: undefined,
};

export const RootBottomTab = () => {

    const Screens: any[] = [
        { id: 1, name: RootTabScreenENum.StackTrangChu, component: TrangChuNavigation, option: {} },
        { id: 2, name: RootTabScreenENum.StackLichSu, component: TrangChuNavigation, option: {} },
        { id: 3, name: RootTabScreenENum.StackLienHe, component: TrangChuNavigation, option: {} },
        { id: 4, name: RootTabScreenENum.StackCaiDat, component: TrangChuNavigation, option: {} },
    ]
    return Screens;
}
export const configTab = ({ route }: any) => {
    let color: any
    return {
        tabBarIcon: ({ focused }: any) => {
            let iconName: any;
            color = focused ? BG_COLOR : COLOR.gray
            console.log(route.name);

            if (route.name === RootTabScreenENum.StackTrangChu) {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === RootTabScreenENum.StackLichSu) {
                iconName = focused ? 'history' : 'history';
            }
            else if (route.name === RootTabScreenENum.StackLienHe) {
                iconName = focused ? 'phone' : 'phone-outline';
            }
            else if (route.name === RootTabScreenENum.StackCaiDat) {
                iconName = focused ? 'cog' : 'cog-outline';
            }

            return (
                <Icon name={iconName} size={27} color={color} />
            );
        },

    }
}