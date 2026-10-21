-- Placeholder migration (YATS-011). The real schema arrives in YATS-003.
-- Kept so the migration hook has something to apply on a fresh database.
create table if not exists app_meta (
  key text primary key,
  value text not null
);
insert into app_meta (key, value) values ('schema', 'scaffold') on conflict (key) do nothing;
