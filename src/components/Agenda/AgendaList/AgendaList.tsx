import React, { Fragment, useState } from 'react';
import { styled } from '@mui/material';
import { Agenda, updateNewAgenda } from '@store/agendaSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { calculateDaysLeft, getRole, parseDate, parseLastUpdatedDate } from 'src/utils';
import AgendaOptionsDropdown from '../AgendaOptionsDropdown/AgendaOptionsDropdown';
import { useDispatch } from 'react-redux';
import { openDialog } from '@store/dialogSlice';
import { useGetAgendaByIdQuery } from '@services/agenda/agenda';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { ShareOutlined, VisibilityOutlined } from '@mui/icons-material';
import { openToast } from '@store/toastSlice';

const TableHeadCell = styled(TableCell)({
  fontWeight: 600,
  borderBottom: '1px solid #CAC4D0',
  paddingTop: '1.063rem',
  paddingBottom: '0.688rem',
});

const GreyText = styled(Typography)({
  fontSize: '0.75rem',
  lineHeight: '133.33%',
  color: '#79747E',
  marginTop: '0.25rem',
});

const StyledChip = styled(Chip)({
  padding: '0 0.5rem',
});

type AgendaListProps = {
  agendasList: Agenda[];
  recentAgendas?: boolean;
};

const defaultProps = {
  recentAgendas: false,
};

const AgendaList = ({ agendasList, recentAgendas }: AgendaListProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agendaId, setAgendaId] = useState<string>('');
  const { data, isSuccess, isLoading } = useGetAgendaByIdQuery(agendaId);

  const handleDeleteAgenda = () => dispatch(openDialog('deleteAgenda'));

  const handleEditAgenda = (agendaId: string) => {
    setAgendaId(agendaId);
    if (isSuccess) dispatch(updateNewAgenda(data));
  };

  const handleCopyLink = (link: string, agendaId: string) => {
    //navigator.clipboard.writeText(link);
    navigator.clipboard.writeText(`http://letsmeet-rho.vercel.app/agenda/${agendaId}`);
    //navigator.clipboard.writeText(`http://localhost:5173/agenda/${agendaId}`);
    dispatch(openToast({ text: 'Link copied to clipboard', variant: 'default' }));
  };

  const handlePreview = (link: string, agendaId: string) => {
    //window.open(link, '_blank');
    navigate(`/agenda-view/${agendaId}`);
  };

  const userId = '1';

  if (isSuccess) navigate('/new-agenda');

  return (
    <div className="AgendaList" style={{ width: '100%' }}>
      <TableContainer>
        <Table sx={{ width: '100%', color: 'black' }} aria-label="agenda-list">
          <TableHead>
            <TableRow>
              <TableHeadCell>AGENDA</TableHeadCell>
              <TableHeadCell>DETAILS</TableHeadCell>
              <TableHeadCell>STATE</TableHeadCell>
              <TableHeadCell>ROLE</TableHeadCell>
              <TableHeadCell />
              <TableHeadCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {agendasList.map((agenda: Agenda) => (
              <TableRow key={agenda.id}>
                <TableCell component="th" scope="row">
                  <Typography>{agenda.name}</Typography>
                  <GreyText>ID: {agenda.id}</GreyText>
                </TableCell>
                <TableCell>
                  <Typography>
                    {agenda.end_date !== agenda.start_date
                      ? `${parseDate(agenda.start_date)} - ${parseDate(agenda.end_date)}`
                      : parseDate(agenda.start_date)}
                  </Typography>
                  <GreyText>Last updated: {parseLastUpdatedDate(agenda.last_updated)}</GreyText>
                </TableCell>
                <TableCell>
                  {agenda.status === 'PUBLISHED' ? (
                    <span style={{ display: 'flex', gap: '0.5rem' }}>
                      <StyledChip color="success" label="Published" size="small" />
                      <StyledChip
                        label={calculateDaysLeft(agenda.start_date)}
                        size="small"
                        variant="outlined"
                        sx={{ color: 'black', borderColor: 'black' }}
                      />
                    </span>
                  ) : (
                    <StyledChip label="Draft" size="small" sx={{ color: 'white', backgroundColor: '#909090' }} />
                  )}
                </TableCell>
                <TableCell>
                  <Typography>{getRole(userId, agenda.owner_id, agenda.coowners_ids)}</Typography>
                </TableCell>
                <TableCell>
                  <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {getRole(userId, agenda.owner_id, agenda.coowners_ids) !== 'Viewer' ? (
                      <IconButton aria-label="edit">
                        <ModeEditOutlineOutlinedIcon sx={{ color: 'black' }} />
                      </IconButton>
                    ) : null}
                    {getRole(userId, agenda.owner_id, agenda.coowners_ids) === 'Owner' && recentAgendas === false ? (
                      <IconButton aria-label="delete" onClick={handleDeleteAgenda}>
                        <DeleteOutlineOutlinedIcon sx={{ color: 'black' }} />
                      </IconButton>
                    ) : null}
                    {recentAgendas === false ? <AgendaOptionsDropdown /> : null}
                  </span>
                </TableCell>
                <TableCell>
                  {isLoading && agendaId === agenda.id ? (
                    <CircularProgress />
                  ) : (
                    <IconButton aria-label="edit" onClick={() => handleEditAgenda(agenda.id)}>
                      <ModeEditOutlineOutlinedIcon sx={{ color: 'black' }} />
                    </IconButton>
                  )}
                  {agenda.status === 'DRAFT' ? (
                    <IconButton aria-label="delete" onClick={handleDeleteAgenda}>
                      <DeleteOutlineOutlinedIcon sx={{ color: 'black' }} />
                    </IconButton>
                  ) : null}
                  {agenda.status === 'PUBLISHED' ? (
                    <Fragment>
                      <IconButton aria-label="link" onClick={() => handleCopyLink(agenda.link, agenda.id)}>
                        <ShareOutlined sx={{ color: 'black' }} />
                      </IconButton>
                      <IconButton aria-label="preview" onClick={() => handlePreview(agenda.link, agenda.id)}>
                        <VisibilityOutlined sx={{ color: 'black' }} />
                      </IconButton>
                    </Fragment>
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

AgendaList.defaultProps = defaultProps;

export default AgendaList;
