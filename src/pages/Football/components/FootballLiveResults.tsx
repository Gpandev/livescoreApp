import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const FootballLiveResults: React.FC = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(
    homeTeam: string,
    awayTeam: string,
    homeTeamScore: number,
    awayTeamScore: number
  ) {
    return { homeTeam, awayTeam, homeTeamScore, awayTeamScore };
  }

  const rows = [
    createData('Arsenal', 'Liverpool', 2, 2),
    createData('Chelsea', 'Manchester City', 4, 0),
    createData('Manchester United', 'Luton', 0, 7),
    createData('Everton', 'Aston Villa', 1, 1),
  ];

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ENGLAND: Premier League</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.homeTeam}>
              <StyledTableCell component="th" scope="row">
                <div>{row.homeTeam}</div>
                <div>{row.awayTeam}</div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>{row.homeTeamScore}</div>
                <div>{row.awayTeamScore}</div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
