import { TouchableOpacity, TouchableOpacityProps,TextProps,ActivityIndicator, Text, ActivityIndicatorBase } from "react-native";

import {s} from "./styles"; 
import { colors } from "@/styles/theme";
import React, { Children } from "react";
import { IconProps as TablerIconProps} from "@tabler/icons-react-native"

type ButtonProps = TouchableOpacityProps & { isLoading?: boolean}; 

function Button({ children, style, isLoading = false, ...rest}: ButtonProps){
  return <TouchableOpacity style={[s.container, style]} activeOpacity={0.4}
  disabled={isLoading}
  {...rest}
  >
    {
        isLoading ?  <ActivityIndicator size="small" color={colors.gray[100]}/> : children
    }
   
  </TouchableOpacity>
}
 type IconProps = {
    icon: React.ComponentType<TablerIconProps>
 }

function Icon({icon : Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]}/>
}

Button.Title = Title; 
Button.Icon = Icon; 

export {Button}

function Title({children}: TextProps){
    return <Text style={s.title}>{children}</Text>
}