import Icon from "react-native-vector-icons/Ionicons";
import TrangChuNavigation from "../Stack/StackNavigation";

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
export const configTab = ({route}: any) => {
    return {
        tabBarIcon: ({ color, focused }: any) => {
            let iconName: any;
            console.log(route.name);
            
            if (route.name === RootTabScreenENum.StackTrangChu) {
                iconName = focused ? 'home-sharp' : 'home-outline';
            }
            return (
                <Icon name={iconName} size={24} color={color} />
            );
        },
    }
}