import clsx from "clsx";


export default function LinkButton  ({
  href,
  icon: Icon,
  children,
  ariaLabel,
  unavailableLabel,
  className = "",
  iconSize = 18,
}) {
  const disabled = !href;

  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      aria-label={disabled ? unavailableLabel : ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={clsx(
        "transition-all duration-300",
        disabled
          ? "pointer-events-none cursor-default text-primary/60"
          : "cursor-pointer text-primary/85 hover:text-primary",
        className,
      )}
    >
      {Icon && <Icon className="inline mr-1" size={iconSize} />}
      {children}
    </a>
  );
};