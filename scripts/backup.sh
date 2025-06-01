#!/bin/bash
pg_dump -U postgres -d na_chapa > ../data/backups/dump_$(date +%Y%m%d).sql
