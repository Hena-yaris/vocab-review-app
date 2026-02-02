

export default function formatEthiopianDate(): string {

    const date = new Date();

    const formatter = new Intl.DateTimeFormat("am-ET-u-ca-ethiopic", {
        weekday: "long",
        year: "numeric",
        month:"long",
        day:"numeric",
    });

    return formatter.format(date);
}