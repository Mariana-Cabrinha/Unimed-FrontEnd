import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from './styles';

const AnalysisTab = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome do Setor</TableCell>
            <TableCell>Quantidade de Pedidos</TableCell>
            <TableCell>Pedidos Finalizados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.nomeSetor}</TableCell>
              <TableCell>{item.quantidadePedidos}</TableCell>
              <TableCell>{item.pedidosFinalizados}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnalysisTab;
