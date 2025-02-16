import { useMutation, useQuery } from '@tanstack/react-query';
import { Building, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import { getManagedRestaurant } from '~/api/get-managed-restaurant';
import { getProfile } from '~/api/get-profile';
import { signOut } from '~/api/sign-out';
import { Button } from '~/components/ui/button';
import { Dialog, DialogTrigger } from '~/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { StoreProfileDialog } from './store-profile-dialog';
import { Skeleton } from './ui/skeleton';

function AccountMenu() {
  const navigate = useNavigate();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  });

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true });
    },
  });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex select-none items-center gap-2">
            {isLoadingManagedRestaurant ? <Skeleton className="h-4 w-40" /> : managedRestaurant?.name}

            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="font-normal text-muted-foreground text-xs">{profile?.email}</span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 size-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            onClick={() => signOutFn()}
            disabled={isSigningOut}
            className="text-rose-500 dark:text-rose-400"
          >
            <LogOut className="mr-2 size-4" />
            <span>Terminar sessão</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  );
}

export { AccountMenu };
