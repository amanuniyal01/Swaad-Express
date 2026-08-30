export const SocialIcon = ({ Icon, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-green-900"
        >
            <Icon size={28} />
        </a>
    );
};