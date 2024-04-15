export const cn = (...args: (string | boolean | undefined)[]) => {
    return args.filter(Boolean).join(" ");
};