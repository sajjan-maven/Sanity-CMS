const TableBlock = ({ value }: { value: { rows?: { cells?: any[] }[] } }) => {
    const styles = {
        wrap: { overflowX: 'auto' as React.CSSProperties['overflowX'], margin: '16px 0' as React.CSSProperties['margin'] },
        table: { width: '100%', borderCollapse: 'collapse' as React.CSSProperties['borderCollapse'], tableLayout: 'fixed' as const },
        th: {
            background: '#e7dcc5',
            textAlign: 'left' as const,
            padding: '14px 16px',
            border: '1px solid #d9d9d9',
            fontWeight: 600,
        },
        td: {
            padding: '14px 16px',
            border: '1px solid #e5e7eb',
            verticalAlign: 'top' as const,
            lineHeight: 1.5,
        },
        rowAlt: { background: '#faf7f1' }, // subtle zebra
    };

    const renderCell = (c: any) => (c == null ? '' : Array.isArray(c) ? c.map(String).join(' ') : String(c));

    return (
        <div style={styles.wrap}>
            <table style={styles.table}>
                <tbody>
                    {value.rows?.map((r, i) => (
                        <tr key={i} style={i % 2 ? styles.rowAlt : undefined}>
                            {r.cells?.map((c, j) =>
                                i === 0 ? (
                                    <th key={j} style={styles.th}>{renderCell(c)}</th>
                                ) : (
                                    <td key={j} style={styles.td}>{renderCell(c)}</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBlock;