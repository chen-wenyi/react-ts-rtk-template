import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import styles from './Total.module.css';

export function Total() {
  const total = useSelector((state: RootState) => state.total);
  return <span className={styles.total}>Total Clicks: {total}</span>;
}
