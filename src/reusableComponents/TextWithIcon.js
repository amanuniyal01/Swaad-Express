export const TextWithIcon = ({
    Icon,
    children,
    iconColor = "text-blue-700",
    textColor = "text-gray-700",
}) => {
    return (
        <p className={`flex items-center gap-3 ${textColor}`}>
            {Icon && <Icon className={iconColor} size={20} />}
            {children}
        </p>
    );
};